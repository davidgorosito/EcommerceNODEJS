module.exports= (sequelize,DataTypes)=>{
    const usuario = sequelize.define(
    'Usuario',{
        email:DataTypes.STRING,
        contrasena:DataTypes.STRING,
        avatar:DataTypes.STRING,
        deleted_at: DataTypes.DATE

              },
              {
                timestamps: false
              },
    ); 
    return usuario;

}

