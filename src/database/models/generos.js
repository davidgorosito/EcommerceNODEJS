module.exports= (sequelize,DataTypes)=>{
    const generos = sequelize.define(
    'Generos',{
        nombreGenero:DataTypes.STRING,
              },
              {
                nombreGenero:'nombre_genero'
              }
    ); 
    generos.associate=(models)=>{
      generos.hasMany(models.Usuario)
    }
    
    
    return generos;

}

