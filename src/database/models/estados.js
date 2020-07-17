module.exports= (sequelize,DataTypes)=>{
    const estados = sequelize.define(
    'Estados',{
        nombreEstado:DataTypes.STRING,
              },
              {
                nombreEstado:'nombre_estado'
              }
    ); 
    estados.associate=(models)=>{
      estados.hasMany(models.Usuario)
    }
    
    
    return estados;

}

