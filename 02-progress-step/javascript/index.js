document.addEventListener("DOMContentLoaded",function(){
// next button logic
    const arr= document.querySelectorAll(".needed");
    let flag = true;
    let arr_cnt = 1;
    let length = arr.length;

   let Nextbutton = document.getElementById("next-btn");
   Nextbutton.addEventListener("click",()=>{    
    let ele_div = arr[arr_cnt];
    let ele = arr[arr_cnt+1];
    if (arr_cnt<length-1){
    ele_div.classList.add("active");
    ele.classList.add("active");
    arr_cnt+=2;
}
    if (arr_cnt === 7 && flag===false)
    {
        flag = true;
    }
   });
//    previous button

   let Prevbutton = document.getElementById("prev-btn");
   Prevbutton.addEventListener("click",()=>{
    if (flag){
        arr_cnt-=1;
        flag = !flag;
    }

    if (arr_cnt > 1){
        let ele = arr[arr_cnt];
        let ele_div = arr[arr_cnt-1];
        ele.classList.remove("active");
        ele_div.classList.remove("active");
        arr_cnt-=2;
        if (arr_cnt ===0){
            arr_cnt =1;
        }
    }
   });

});








