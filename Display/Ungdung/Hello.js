function sum(){
    
    let a = document.getElementById("so a").value;
    let b = document.getElementById("so b").value;
    let result = parseFloat(a) + parseFloat(b);
    
    // muốn hiện thị ra màn hình thì dùng innerHTML
    document.getElementById("Kết quả").innerHTML = `Kết quả: ${result}`;
}
sum();
