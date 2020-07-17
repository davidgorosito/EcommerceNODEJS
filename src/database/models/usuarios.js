module.exports= (sequelize,DataTypes)=>{
    const usuario = sequelize.define(
    'Usuario',{
        email:DataTypes.STRING,
        contrasena:DataTypes.STRING,
              },
              {
                estadoId:'estado_id'
              }
    ); 
    usuario.associate=(models)=>{
      usuario.belongsTo(models.Generos)
    }
    
    
    return usuario;

}

