const uds = 3;
const haitianGourde = 108;

function convertUstoGourde (usdConverter, rateConverter){
    const converted = usdConverter * rateConverter
    return converted;

}

const newValue = convertUstoGourde(uds, haitianGourde)
console.log("There are " , uds, "UsD in", newValue + " Gourdes")



const convertUsDollar = ( us, rate) => {
 let result = us * rate
 return result
}
const value = convertUsDollar(3, 119)
console.log(`There is 3$ in `, value,`Gourde`)
console.log(`There is $ in gourdes `, convertUsDollar(15, 108))