const products = [
    {
        id: 1,
        name: 'Thempo Gris Topo',
        price: 13900,
        category: 'clasic',
        img: './productos/thempo-gris-topo.webp' ,
        stock: '10',
        description: 'lorem ssdnf uiwshndfiabf uifhdif dioin'
    },
    {
        id: 2,
        name: 'Thempo Gris Cemento',
        price: 13900,
        category: 'clasic',
        img: './productos/thempo-gris-cemento.webp',
        stock: '20',
        description: 'lorem smnikno id isdhfiojnasdijofnd i'
    },
    {
        id: 3,
        name: 'Thempo Rosa Pastel',
        price: 14900,
        category: 'color',
        img: './productos/thempo-rosa-pastel.webp',
        stock: '30',
        description: 'klmndkbnsjk jkdsnvikds idshfd ifsdaif jijh'
    }
    ,
    {
        id: 4,
        name: 'Thempo Celeste pastel',
        price: 14900,
        category: 'color',
        img: './productos/thempo-celeste-pastel.webp',
        stock: '30',
        description: 'klmndkbnsjk jkdsnvikds idshfd ifsdaif jijh'
    }
    ,
    {
        id: 5,
        name: 'Thempo beige',
        price: 14900,
        category: 'color',
        img: './productos/thempo-beige.webp',
        stock: '30',
        description: 'klmndkbnsjk jkdsnvikds idshfd ifsdaif jijh'
    }
    ,
    {
        id: 6,
        name: 'Thempo Verde militar',
        price: 14900,
        category: 'color',
        img: './productos/thempo-verde-militar.webp',
        stock: '30',
        description: 'klmndkbnsjk jkdsnvikds idshfd ifsdaif jijh'
    }
    ,
]

export const getProducts = ()=> {
return new Promise((resolve) =>{
    setTimeout(resolve(products) ,1000)
    
    
})
}
