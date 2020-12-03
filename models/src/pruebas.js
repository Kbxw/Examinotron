const bcrypt = require('bcryptjs')

const getHash = async (password)=>{
    return await bcrypt.hash(password,8)
}

const compararPasswordConHash = (password, hash) =>{
    return await bcrypt.compare(password, await getHash(password))

}

const todoBien = compararPasswordConHash('secreto').then((data)=>{console.log(data)}) 
console.log('todoBien? ', todoBien);