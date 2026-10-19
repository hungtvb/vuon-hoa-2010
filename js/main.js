/* TẠM: bắt lỗi JS hiện lên màn hình để debug live - SẼ GỠ */
window.addEventListener("error", e=>{
  const d = document.createElement("div");
  d.id = "liveErr";
  d.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:#b71c1c;color:#fff;padding:10px;z-index:999;font-size:13px;word-break:break-all";
  d.textContent = "LỖI JS: " + e.message + " @ " + (e.filename||"").split("/").pop() + ":" + e.lineno;
  document.body.appendChild(d);
});
/* ================= INIT: preload sprite rồi mới vào cover ================= */
const SPRITE_FILES = ["bud","bloom1","bloom2","bloomX","bloomXX","wilt","rose","goldflower","daisy","tulip","butterfly","bee","heart","leaf","drop","star","candy","bell","bow","sun","shroom","shell","vase","sparkle","butterfly_fly","bee_fly"];
(function(){
  let loaded = 0, finished = false;
  const total = SPRITE_FILES.length;
  const bar = document.getElementById("loadBar");
  const pct = document.getElementById("loadPct");
  function done(){
    if(finished) return; finished = true;
    document.getElementById("loader").style.display = "none";
    show("screen-cover");
  }
  function tick(){
    loaded++;
    const p = Math.round(loaded/total*100);
    if(bar) bar.style.width = p + "%";
    if(pct) pct.textContent = p + "%";
    if(loaded >= total) done();
  }
  SPRITE_FILES.forEach(n=>{
    const im = new Image();
    im.onload = tick; im.onerror = tick;
    im.src = SPR_DIR + n + ".png";
  });
  setTimeout(done, 8000); // khong ket qua 8s
})();
