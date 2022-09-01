const fs=require('fs')

class Contenedor{
    constructor(archivo){
        this.archivo=archivo
    }

    async save(object){
        const data=await fs.promises.readFile('data/productos.json','utf-8')
    
        const productos=JSON.parse(data)
        const id= productos.length+1
        object.id=id
        productos.push(object)
        console.log(productos)
        await fs.promises.writeFile('data/productos.json',JSON.stringify(productos))
   }

    async getById(id){
        const data=await fs.promises.readFile('data/productos.json','utf-8')
        const productos=JSON.parse(data)
        let producto=productos.find(el=>el.id===id)
        if(producto){
            console.log(producto)
        }
        else{
            console.log('el usuario no existe')
        }
    }
    
    async getAll(){
        try{
            const data=await fs.promises.readFile('data/productos.json','utf-8')
            return JSON.parse(data);
        } catch(error){
            return[];
        }
    }

    async deleteById(id){
        const data=await fs.promises.readFile('data/productos.json','utf-8')
        const productos=JSON.parse(data)
        let producto=productos.find(el=>el.id===id)
       
        if(producto){
            let index= productos.indexOf(producto)
            productos.splice(index,1)
            console.log(productos)
        }
        else{
            console.log('el usuario no existe')
        }
        await fs.promises.writeFile('data/productos.json',JSON.stringify(productos))

    }

    async deleteAll(){
        const data=await fs.promises.readFile('data/productos.json','utf-8')
        const productos=JSON.parse(data)
        productos.splice(0,productos.length)
        console.log(productos)

        await fs.promises.writeFile('data/productos.json',JSON.stringify(productos))

    }
}

const db=new Contenedor('data')

//db.save({title:'Lapiz',price:125.45,thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'})
//db.save({title:'Calculadora',price:258.40,thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'})

//db.getAll()

//db.getById(3)

//db.deleteById(1)

//db.deleteAll()
module.exports = Contenedor;
