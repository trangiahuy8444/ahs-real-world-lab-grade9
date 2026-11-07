/* Copy and self-check controls; no accounts or automatic submission. */
document.addEventListener('click',async function(event){
 const button=event.target.closest('[data-copy-id]');if(!button)return;
 const source=document.getElementById(button.dataset.copyId),status=button.parentElement.querySelector('[role=status]');
 if(!source||!status)return;
 try{if(!navigator.clipboard||!navigator.clipboard.writeText)throw new Error('clipboard unavailable');await navigator.clipboard.writeText(source.textContent);status.textContent='Đã sao chép. Dán vào công cụ và thay thông tin của nhóm.';}
 catch(error){const selection=window.getSelection(),range=document.createRange();range.selectNodeContents(source);selection.removeAllRanges();selection.addRange(range);status.textContent='Hãy chạm giữ hoặc nhấn Ctrl+C / Command+C để sao chép đoạn đã chọn.';}
});
document.addEventListener('change',function(event){if(!event.target.matches('[data-rwl-check]'))return;const root=event.target.closest('main'),all=root.querySelectorAll('[data-rwl-check]'),done=root.querySelectorAll('[data-rwl-check]:checked'),output=root.querySelector('[data-rwl-progress]');if(output)output.textContent='Đã tự kiểm tra '+done.length+'/'+all.length+' tiêu chí. '+(done.length===all.length?'Mở LMS để nộp bài; dấu tích chưa phải xác nhận đã nộp.':'Hãy xử lý các mục còn lại trước khi nộp.');});
/* Match anchor offsets after font loading, rotation, or header wrapping. */
(function(){const header=document.querySelector('body>header');if(!header)return;function update(){const floating=getComputedStyle(header).position==='sticky'||getComputedStyle(header).position==='fixed';document.documentElement.style.setProperty('--rwl-header-height',(floating?header.getBoundingClientRect().height:0)+'px');}update();window.addEventListener('resize',update);if(typeof ResizeObserver!=='undefined')new ResizeObserver(update).observe(header);})();
