const man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    }
];

const woment = [
    {
        id: 1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIS9y58Gkoqi40VVMpMspocoifJnZlhkUAkMzQOegrQ&s=10"
    },
    {
        id: 3,
        name: "Áo khoác",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ku8zopPH3SxUINYpHE1a62-jdEk2iH_JEBIkN1ZOFQ&s=10"
    },
    {
        id: 4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy09G2A1xLJqNypcAM09fjoxs3DBALu99nxiMTwn4N-g&s=10"
    }
];

function renderProducts(products, targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    let html = "";

    products.forEach((item) => {
        html += '<div class="col-3">';
        html += '<div class="card" style="width: 18rem;">';
        html += '<img src="' + item.image + '" class="card-img-top" style="height:400px;">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + item.name + '</h5>';
        html += '<p class="card-text">' + item.price + '</p>';
        html += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });

    container.innerHTML += html;
}

function listProducts() {
    renderProducts(man, "men");
    renderProducts(woment, "woment");
}

function order() {
    alert("Cảm ơn bạn đã đặt hàng!");
}

function oder() {
    order();
}
