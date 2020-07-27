module.exports= (sequelize,DataTypes)=>{
    const usuario = sequelize.define(
    'Usuario',{
        email:DataTypes.STRING,
        contrasena:DataTypes.STRING,
        deleted_at: DataTypes.DATE

              },
              {
                estadoId:'estado_id'
              }
    ); 
  
    
    
    return usuario;

}

