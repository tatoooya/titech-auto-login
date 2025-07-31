/* options.js  – マトリクスを表形式で編集 */
const ROWS = 7;
const COLS = 10;
const wrapper = document.getElementById("matrix-wrapper");
const $ = id => document.getElementById(id);

/* ---------------- 表を動的生成 ---------------- */
function buildMatrixTable(matrixData = null) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  trHead.innerHTML = "<th></th>" +
    Array.from({ length: COLS }, (_, c) => `<th>${String.fromCharCode(65 + c)}</th>`).join("");
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let r = 0; r < ROWS; r++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${r + 1}</th>` +
      Array.from({ length: COLS }, (_, c) => {
        const val = matrixData?.[r]?.[c] ?? "";
        return `<td><input maxlength="1" value="${val}"></td>`;
      }).join("");
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  wrapper.innerHTML = "";   // 旧テーブルを消去
  wrapper.appendChild(table);
}

/* ---------------- 保存済み値をロード ---------------- */
chrome.storage.local.get(["account", "password", "matrix"], ({ account, password, matrix }) => {
  if (account)  $("acc").value = account;
  if (password) $("pw").value  = password;
  buildMatrixTable(matrix);               // テーブルに反映
});

/* ---------------- 保存ボタン ---------------- */
$("save").addEventListener("click", () => {
  const acc = $("acc").value.trim();
  const pw  = $("pw").value.trim();

  if (!acc || !pw) {
    alert("ID と Password を入力してください");
    return;
  }

  /* テーブルから値を吸い上げ */
  const matrix = [];
  const inputs = wrapper.querySelectorAll("tbody td input");
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const val = inputs[r * COLS + c].value.trim();
      if (val.length !== 1) {
        alert(`行 ${r + 1}, 列 ${String.fromCharCode(65 + c)} が 1 文字ではありません`);
        return;
      }
      row.push(val);
    }
    matrix.push(row);
  }

  /* 保存 */
  chrome.storage.local.set({ account: acc, password: pw, matrix }, () => {
    $("status").textContent = "保存しました ✔";
    $("status").style.color = "green";
    setTimeout(() => $("status").textContent = "", 1500);
  });
});
