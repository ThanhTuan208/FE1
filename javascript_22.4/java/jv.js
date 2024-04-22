function myFunction(){
    alert('hello javascript')
}

function myFunction1(){
    ten = prompt('ten dang nhap: ')
    alert("xin chao: "+ ten)
    if(confirm = ten)
    {
        alert("chung toi ghi nhan lua chon nay!!")
    }
}
function myFunction2(){
    confirm('hello java')

}
function myFunction3(){
    document.getElementById('demo').textContent = "dieu huong la con cho";
}
function myFunction4(){
     window.print();
}   

function myFunction5(){  
    const d = new Date().toDateString();
    document.getElementById('demo').textContent = d;   
}
function myFunction6(){  
    let fullname = document.getElementsByName('demo')[0].value;
    let arr = fullname.split;
    let result = "";
    
    for(let i =0; i < arr.length; i++)
    {       
        if(arr[i] != "")
        {
            let mottu = arr[i].trim();
            result += mottu.charAt(0).toUpperCase();
            result += mottu.substr(1);
            result += " ";
        }
        result = result.trim();
    }

    document.getElementById('demo').textContent =result;   
}   



