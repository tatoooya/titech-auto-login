/* ───────── content.js 2025-05-17  matrix fix (no :contains) ───────── */
(async () => {
    console.log("[auto-login] content.js loaded:", location.href);
  
    /* 0. 保存値取得 */
    const { account, password, matrix } = await chrome.storage.local.get(
      ["account", "password", "matrix"]
    );
    if (!account || !password) return;
  
    /* ヘルパ: sel が出るまで待つ */
    const waitFor = (sel, ms = 4000) =>
      new Promise(ok => {
        if (document.querySelector(sel)) return ok(true);
        const st = Date.now();
        const ob = new MutationObserver(() => {
          if (document.querySelector(sel)) { ob.disconnect(); ok(true); }
          else if (Date.now() - st > ms)   { ob.disconnect(); ok(false); }
        });
        ob.observe(document, { childList: true, subtree: true });
      });
  
    /* ───────── ① ID／PW ページ ───────── */
    if (location.search.includes("Template=userpass_key")) {
      const acc = await waitFor('input[type="text"],input[name="user"],input[id*="user"]');
      const pw  = await waitFor('input[type="password"],input[name="pass"],input[id*="pass"]');
      if (acc && pw) {
        const accBox = document.querySelector('input[type="text"],input[name="user"],input[id*="user"]');
        const pwBox  = document.querySelector('input[type="password"],input[name="pass"],input[id*="pass"]');
        accBox.value = account; pwBox.value = password;
        ["input","change","keyup"].forEach(evt=>{
          accBox.dispatchEvent(new Event(evt,{bubbles:true}));
          pwBox .dispatchEvent(new Event(evt,{bubbles:true}));
        });
        accBox.closest("form")?.submit();
      }
      return;
    }
  
    /* ───────── ② マトリクスページ ───────── */
    if (!Array.isArray(matrix)) return;
  
    /* 入力欄 (message3 など) が出るまで待つ */
    const hasInputs = await waitFor('input[name^="message"]');
    if (!hasInputs) { console.warn("[auto-login] matrix inputs not found"); return; }
  
    /* #authentication テーブル内の <tr> を走査 */
    const rows = document.querySelectorAll('#authentication tr');
    rows.forEach(tr => {
      const th = tr.querySelector('th');
      const inp = tr.querySelector('input[name^="message"]');
      if (!th || !inp) return;
  
      const m = th.textContent.trim().match(/\[?([A-J])\s*,\s*([1-7])\]?/i);
      if (!m) return;                       // ラベルが無い行
  
      const colIdx = m[1].toUpperCase().charCodeAt(0) - 65; // 0–9
      const rowIdx = Number(m[2]) - 1;                      // 0–6
      const char   = matrix?.[rowIdx]?.[colIdx] ?? "";
  
      inp.value = char;
      ["input","change","blur","focus"].forEach(evt =>
        inp.dispatchEvent(new Event(evt,{bubbles:true}))
      );
    });
  
    /* OK ボタン送信 */
    const okBtn = [...document.querySelectorAll('input[type="submit"]')]
      .find(btn => btn.value.trim().toUpperCase() === "OK");
    (okBtn || document.forms["login"])?.click();
  })();
  