import React,{useState,createContext} from 'react';
export const sectionsData=createContext();
export const CurrentData =({children})=>{
    const [sections, setSections] = useState([
                    {
                        img:require('./../../img/features/f1.png'),
                        title:'Free shoping',
                        color:'rgb(204, 175, 182)',
                        fontColor:'rgb(128, 128, 128)'
                    },
                    {
                        img:require('./../../img/features/f2.png'),
                        title:'Online order',
                        color:'rgb(179, 202, 167)',
                        fontColor:'rgb(114, 149, 120)'

                    },
                    {
                        img:require('./../../img/features/f3.png'),
                        title:'Save money',
                        color:'rgb(180, 202, 209)',
                        fontColor:'rgb(87, 119, 124)'

                    },
                    {
                        img:require('./../../img/features/f4.png'),
                        title:'Promotions',
                        color:'rgb(175, 185, 216)',
                        fontColor:'rgb(90, 128, 144)'

                    },
                    {
                        img:require('./../../img/features/f5.png'),
                        title:'Happy sell',
                        color:'rgb(208, 191, 212)',
                        fontColor:'rgb(101, 117, 129)'

                    },
                    {
                        img:require('./../../img/features/f6.png'),
                        title:'F 24/7 Support',
                        color:'rgb(217, 206, 199)',
                        fontColor:'rgb(95, 127, 120)'
                    }]
    );
    const [featuredClothes, setFeaturedClothes] = useState([{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/f1.jpg'),
        Manufacturer:'Shein',
        title:'Men\'s Abstract Floral Print Shirt',
        stars:4,
        price:'40$',
        id:'FC1'
        // colors:{
        //     img:require('')
        // }
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/f2.jpg'),
        Manufacturer:'Zara',
        title:'Hawaiian Style Green Casual Shirt',
        stars:5,
        price:'35$',
        id:'FC2'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/f3.jpg'),
        Manufacturer:'Zara',
        title:'Retro Floral Casual Shirt',
        stars:4,
        price:'30$',
        id:'FC3'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/f4.jpg'),
        Manufacturer:'Uniqlo',
        title:'Men\'s Floral Print Summer Shirt',
        stars:4,
        price:'50$',
        id:'FC4'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/f5.jpg'),
        Manufacturer:'H&M',
        title:'Casual Short-Sleeve Floral Shirt',
        stars:2,
        price:'45$',
        id:'FC5'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/imresizer-1729100082598.jpg'),
        Manufacturer:'Zara',
        title:'Basic White T-Shirt',
        stars:4,
        price:'25$',
        id:'FC6'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/75.43376998969207.png'),
        Manufacturer:'Uniqlo',
        title:'Ultra Light Down Jacket',
        stars:5,
        price:'99.90$',
        id:'FC7'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/20.753333556305375.png'),
        Manufacturer:'Forever 21',
        title:'Floral Print Dress',
        stars:3,
        price:'30$',
        id:'FC8'
    }]);
    const [newClothes, setNewClothes] = useState([{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n1.jpg'),
        Manufacturer:'Uniqlo',
        title:'Men’s Long-Sleeve Button-Up Shirt',
        stars:4,
        price:'30$',
        id:'NC1'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n2.jpg'),
        Manufacturer:'H&M',
        title:'Men’s Checkered Long-Sleeve Shirt',
        stars:4,
        price:'45$',
        id:'NC2'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n3.jpg'),
        Manufacturer:'Uniqlo',
        title:'Men’s White Long-Sleeve Shir',
        stars:4,
        price:'40$',
        id:'NC3'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n4.jpg'),
        Manufacturer:'Burlebo',
        title:'Men’s Printed Short-Sleeve Shirt',
        stars:5,
        price:'60$',
        id:'NC4'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n5.jpg'),
        Manufacturer:'Wrangler',
        title:'Men’s Denim Long-Sleeve Shirt',
        stars:5,
        price:'80$',
        id:'NC5'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n6.jpg'),
        Manufacturer:'Loft',
        title:'Striped Belted Shorts',
        stars:4,
        price:'60$',
        id:'NC6'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n7.jpg'),
        Manufacturer:'Wrangler',
        title:'Men’s Tan Utility Shirt',
        stars:5,
        price:'70$',
        id:'NC7'
    },{
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/products/n8.jpg'),
        Manufacturer:'H&M',
        title:'Men’s Dark Short-Sleeve Shirt',
        stars:4,
        price:'50$',
        id:'NC8'
    }]);
    const [bigActiveOffer, setbigActiveOffer] = useState([{
        text1:'Crazy deales',
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/banner/b17.jpg'),
        text2:'get 1 buy 1 free',
        title:'the best classic dress is on sale at cara',
        textOfbutton:'Learn more'
    }
    ,{
        text1:'spring/summer',
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/banner/b10.jpg'),
        text2:'Upcomming season',
        title:'the best classic T-shirts is on sale at cara',
        textOfbutton:'Collection'
    }
]);
const [smallOffer,setsmallOffer] = useState([{
        title:'SEASONAL SALE',
        supTitle:'Winter Collection - 50% OFF',
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/banner/b7.jpg')
},
{
        title:'NEW FOOTWEAR COLLECTION',
        supTitle:'Spring / Summer 2022',
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/banner/b4.jpg')
},
{
        title:'T-SHIRTS',
        supTitle:'New trendy prints',
        img:require('E:/PROGRAMING/Cloths shop project/cloths-shop/src/img/banner/b18.jpg')
}
])

    return(
        <sectionsData.Provider 
        value={{sections, setSections,
        featuredClothes,setFeaturedClothes,
        newClothes,setNewClothes,
        bigActiveOffer,setbigActiveOffer,
        smallOffer,setsmallOffer
        }}>
            {children}
        </sectionsData.Provider>
    )
};
