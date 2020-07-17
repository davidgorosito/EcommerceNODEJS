module.exports= (sequelize,DataTypes)=>{
    const generos = sequelize.define(
    'generos',{
        nombreGenero:DataTypes.STRING,
              },
              {
                nombreGenero:'nombre_genero'
              }
    ); 
    generos.associate=(models)=>{
      generos.hasMany(models.usuario)
    }
    
    
    return generos;

}

