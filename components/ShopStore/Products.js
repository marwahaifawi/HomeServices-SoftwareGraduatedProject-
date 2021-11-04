export default 
 [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        favorite: true,
        image: require('../../assets/products/clean.png'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        favorite: false,
        image: require('../../assets/products/clean0.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 2,
        favorite: false,
        image: require('../../assets/products/clean1.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../../assets/products/clean.png'),
        favorite: false,
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'SweetHome Cupcake',
        price: 2,
        favorite: false,
        image: require('../../assets/products/clean.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },{
        id: 103,
        name: 'SweetHome Cupcake',
        price: 2,
        favorite: false,
        image: require('../../assets/products/clean.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
