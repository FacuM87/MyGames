

export const getUsers = async(req, res) => {
    res.status(200).json({message: "trayendo usuarios"})
}

export const createUser = async(req, res) => {
    const {email} = req.body
    res.status(200).json({message: `creando usuario con email: ${email}`})
}

export const updateUser = async(req, res) => {
    const id = req.params.id
    res.status(200).json({message: `Usuario de id ${id} actualizado`})
}

export const deleteUser = async(req, res) =>{
    const id = req.params.id
    res.status(200).json({message: `Usuario de id ${id} fue eliminado`})
}