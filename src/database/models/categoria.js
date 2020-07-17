module.exports= (sequelize,DataTypes)=>{
    const categorias = sequelize.define(
    'Categoria',{
        nombreCategoria:DataTypes.STRING,
              },
              {
                nombreCategoria:'nombre_categoria'
              }
    ); 
    categorias.associate=(models)=>{
      categorias.hasMany(models.Producto)
    }
    
    
    return categorias;

}

