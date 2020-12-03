const bcrypt = require('bcryptjs')

const password = '12345'

const getHash = async (password)=>{
    const hash = await bcrypt.hash(password,8)
    console.log('hash: ', hash);
    return hash
}

const compararPasswordConHash = (password, hash) =>{
    return await bcrypt.compare(password, await getHash(password))

}

const todoBien = compararPasswordConHash('secreto').then((data)=>{console.log(data)}) 
console.log('todoBien? ', todoBien);