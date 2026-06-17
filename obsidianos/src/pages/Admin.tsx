import { useState, useEffect } from 'react';

import { Save, Loader2, LogIn, Plus, Trash2 } from 'lucide-react';

type Tab = { id: string; label: string };
type Row = { type?: string; label?: string; cells?: string[] };
type CategoryData = { id: string; headers: string[]; rows: Row[]; footer: string | null };
type CatalogueData = { tabs: Tab[]; catalogueData: CategoryData[] };

const Admin = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('adminToken'));
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [data, setData] = useState<CatalogueData | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>('');
  
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  useEffect(() => {
    if (token) fetchCatalogueData();
  }, [token]);

  const fetchCatalogueData = async () => {
    setIsLoadingData(true);
    try {
      const res = await fetch('/api/catalogue');
      const json: CatalogueData = await res.json();
      setData(json);
      if (json.tabs && json.tabs.length > 0) {
        setActiveTabId(json.tabs[0].id);
      }
    } catch (err) {
      console.error('Failed to load catalogue', err);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password })
      });
      const resData = await res.json();

      if (res.ok) {
        setToken(resData.token);
        localStorage.setItem('adminToken', resData.token);
      } else {
        setLoginError(resData.error || 'Login failed');
      }
    } catch (err) {
      setLoginError('Error connecting to server');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSave = async () => {
    if (!data) return;
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const res = await fetch('/api/catalogue', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSaveStatus({ type: 'success', message: 'Catalogue updated successfully!' });
      } else {
        const resData = await res.json();
        setSaveStatus({ type: 'error', message: resData.error || 'Failed to save catalogue' });
      }
    } catch (err: any) {
      setSaveStatus({ type: 'error', message: err.message || 'Error saving data' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('adminToken');
  };

  // === DATA MUTATION HELPERS ===

  const currentCategory = data?.catalogueData.find(c => c.id === activeTabId);

  const updateCategory = (updatedCat: CategoryData) => {
    if (!data) return;
    setData({
      ...data,
      catalogueData: data.catalogueData.map(c => c.id === updatedCat.id ? updatedCat : c)
    });
  };

  const handleCellChange = (rowIndex: number, cellIndex: number, value: string) => {
    if (!currentCategory) return;
    const newRows = [...currentCategory.rows];
    if (newRows[rowIndex].cells) {
      newRows[rowIndex].cells![cellIndex] = value;
      updateCategory({ ...currentCategory, rows: newRows });
    }
  };

  const handleHeaderChange = (headerIndex: number, value: string) => {
    if (!currentCategory) return;
    const newHeaders = [...currentCategory.headers];
    newHeaders[headerIndex] = value;
    updateCategory({ ...currentCategory, headers: newHeaders });
  };

  const handleBrandLabelChange = (rowIndex: number, value: string) => {
    if (!currentCategory) return;
    const newRows = [...currentCategory.rows];
    newRows[rowIndex].label = value;
    updateCategory({ ...currentCategory, rows: newRows });
  };

  const addProductRow = () => {
    if (!currentCategory) return;
    const newRow: Row = { cells: Array(currentCategory.headers.length).fill('') };
    updateCategory({ ...currentCategory, rows: [...currentCategory.rows, newRow] });
  };

  const addBrandRow = () => {
    if (!currentCategory) return;
    const newRow: Row = { type: 'brand-row', label: 'NEW BRAND' };
    updateCategory({ ...currentCategory, rows: [...currentCategory.rows, newRow] });
  };

  const removeRow = (rowIndex: number) => {
    if (!currentCategory) return;
    const newRows = currentCategory.rows.filter((_, idx) => idx !== rowIndex);
    updateCategory({ ...currentCategory, rows: newRows });
  };

  const addTab = () => {
    if (!data) return;
    const id = prompt('Enter a unique ID for the new tab (e.g., "filters"):');
    if (!id) return;
    const label = prompt('Enter a label for the new tab (e.g., "Oil Filters"):');
    if (!label) return;

    const newTab: Tab = { id, label };
    const newCategory: CategoryData = {
      id,
      headers: ['Ref No.', 'Suitable For', 'MRP (₹)'],
      rows: [],
      footer: null
    };

    setData({
      tabs: [...data.tabs, newTab],
      catalogueData: [...data.catalogueData, newCategory]
    });
    setActiveTabId(id);
  };

  const removeTab = () => {
    if (!data || !activeTabId) return;
    if (confirm(`Are you sure you want to delete the ${activeTabId} tab and all its data?`)) {
      const newTabs = data.tabs.filter(t => t.id !== activeTabId);
      const newCatData = data.catalogueData.filter(c => c.id !== activeTabId);
      setData({ tabs: newTabs, catalogueData: newCatData });
      if (newTabs.length > 0) setActiveTabId(newTabs[0].id);
      else setActiveTabId('');
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <main className="flex-1 w-full max-w-[1512px] mx-auto px-6 md:px-10 pt-32 pb-24">
        {!token ? (
          <div className="max-w-md mx-auto bg-card border border-border/50 rounded-3xl p-8 mt-12 shadow-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center text-foreground">Admin Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-2 block">Admin ID</label>
                <input required type="text" value={id} onChange={e => setId(e.target.value)} className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:border-primary/50 outline-none text-foreground" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase mb-2 block">Password</label>
                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm focus:border-primary/50 outline-none text-foreground" />
              </div>
              {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              <button disabled={isLoggingIn} type="submit" className="w-full bg-primary text-primary-foreground h-12 rounded-lg font-bold uppercase tracking-wide mt-2 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                {isLoggingIn ? <Loader2 className="w-5 h-5 animate-spin" /> : <><LogIn className="w-5 h-5" /> Login</>}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col h-full mt-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-heading uppercase text-primary">Visual Editor</h1>
              <div className="flex gap-4">
                <button onClick={handleLogout} className="px-4 py-2 border border-border/50 rounded-lg text-sm hover:bg-secondary text-foreground transition-colors">
                  Logout
                </button>
                <button disabled={isSaving} onClick={handleSave} className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50">
                  {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save Changes
                </button>
              </div>
            </div>

            {saveStatus && (
              <div className={`p-4 rounded-lg mb-6 text-sm font-medium ${saveStatus.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                {saveStatus.message}
              </div>
            )}

            {isLoadingData || !data ? (
              <div className="flex-1 flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-6">
                
                {/* TABS MANAGEMENT */}
                <div className="bg-card border border-border/50 rounded-xl p-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                    <span className="text-sm font-bold text-muted-foreground uppercase">Current Tab:</span>
                    <select 
                      value={activeTabId} 
                      onChange={e => setActiveTabId(e.target.value)}
                      className="bg-background/50 border border-border/50 rounded-md px-3 py-2 text-sm text-foreground focus:outline-none flex-1"
                    >
                      {data.tabs.map(tab => (
                        <option key={tab.id} value={tab.id}>{tab.label} ({tab.id})</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={addTab} className="px-4 py-2 bg-secondary text-foreground rounded-md text-sm font-medium hover:bg-secondary/80 flex items-center gap-1 transition-colors border border-border/50">
                      <Plus className="w-4 h-4" /> Add Tab
                    </button>
                    <button onClick={removeTab} disabled={data.tabs.length <= 1} className="px-4 py-2 bg-red-500/10 text-red-500 rounded-md text-sm font-medium hover:bg-red-500/20 flex items-center gap-1 transition-colors disabled:opacity-50">
                      <Trash2 className="w-4 h-4" /> Delete Tab
                    </button>
                  </div>
                </div>

                {/* TABLE EDITOR */}
                {currentCategory && (
                  <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm flex flex-col flex-1">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead className="bg-secondary/50">
                          <tr>
                            <th className="w-12 p-3 text-center border-b border-border/50 border-r text-xs text-muted-foreground">#</th>
                            {currentCategory.headers.map((header, idx) => (
                              <th key={idx} className="p-3 border-b border-border/50 border-r last:border-r-0">
                                <input 
                                  type="text"
                                  value={header}
                                  onChange={(e) => handleHeaderChange(idx, e.target.value)}
                                  className="w-full bg-transparent border-none focus:outline-none text-sm font-bold uppercase tracking-wider text-muted-foreground"
                                  placeholder={`Header ${idx + 1}`}
                                />
                              </th>
                            ))}
                            <th className="w-16 p-3 border-b border-border/50 text-center text-xs text-muted-foreground">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                          {currentCategory.rows.map((row, rowIdx) => {
                            if (row.type === 'brand-row') {
                              return (
                                <tr key={rowIdx} className="bg-primary/5 hover:bg-primary/10 transition-colors">
                                  <td className="p-3 text-center border-r border-border/50 text-xs text-muted-foreground">{rowIdx + 1}</td>
                                  <td colSpan={currentCategory.headers.length} className="p-3 border-r border-border/50">
                                    <input 
                                      type="text" 
                                      value={row.label || ''} 
                                      onChange={(e) => handleBrandLabelChange(rowIdx, e.target.value)}
                                      className="w-full bg-transparent border-none focus:outline-none text-sm font-bold text-primary tracking-widest uppercase placeholder:text-primary/50"
                                      placeholder="Brand Name..."
                                    />
                                  </td>
                                  <td className="p-3 text-center">
                                    <button onClick={() => removeRow(rowIdx)} className="text-muted-foreground hover:text-red-500 transition-colors p-1" title="Delete Row">
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </td>
                                </tr>
                              );
                            }

                            return (
                              <tr key={rowIdx} className="hover:bg-secondary/20 transition-colors">
                                <td className="p-3 text-center border-r border-border/50 text-xs text-muted-foreground">{rowIdx + 1}</td>
                                {currentCategory.headers.map((_, cellIdx) => (
                                  <td key={cellIdx} className="p-2 border-r border-border/50 last:border-r-0">
                                    <input
                                      type="text"
                                      value={row.cells?.[cellIdx] || ''}
                                      onChange={(e) => handleCellChange(rowIdx, cellIdx, e.target.value)}
                                      className={`w-full bg-transparent border border-transparent hover:border-border/50 focus:border-primary/50 rounded px-2 py-1.5 focus:outline-none text-sm text-foreground transition-colors ${currentCategory.headers[cellIdx].includes('MRP') || currentCategory.headers[cellIdx].includes('Price') ? 'text-right font-medium' : ''}`}
                                      placeholder="-"
                                    />
                                  </td>
                                ))}
                                <td className="p-3 text-center">
                                  <button onClick={() => removeRow(rowIdx)} className="text-muted-foreground hover:text-red-500 transition-colors p-1" title="Delete Row">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* FOOTER ACTIONS */}
                    <div className="p-4 bg-secondary/20 border-t border-border/50 flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-2">
                        <button onClick={addProductRow} className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-md hover:bg-secondary/80 transition-colors border border-border/50 flex items-center gap-1">
                          <Plus className="w-4 h-4" /> Add Product
                        </button>
                        <button onClick={addBrandRow} className="px-4 py-2 bg-[#F7E7CE]/10 text-[#F7E7CE] text-sm font-medium rounded-md hover:bg-[#F7E7CE]/20 transition-colors border border-[#F7E7CE]/30 flex items-center gap-1">
                          <Plus className="w-4 h-4" /> Add Brand Header
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">{currentCategory.rows.length} Rows</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
