module.exports= (sequelize,DataTypes)=>{
    const producto = sequelize.define(
    'Producto',{
        nombre:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        precio:DataTypes.INTEGER,
        imagenProducto:DataTypes.STRING},
              {
                generoId:'genero_id',
                categoriaId:'categoria_id'
              }
    ); return producto;

}

