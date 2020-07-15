module.exports= (sequelize,DataTypes)=>{
    const usuario = sequelize.define(
    'usuario',{
        email:DataTypes.STRING,
        contrasena:DataTypes.STRING,
              },
              {
                estadoId:'estado_id'
              }
    ); return usuario;

}

