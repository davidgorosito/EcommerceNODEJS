module.exports= (sequelize,DataTypes)=>{
    const producto = sequelize.define(
    'producto',{
        nombre:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        precio:DataTypes.INTEGER},
              {
                generoId:'genero_id',
                categoriaId:'categoria_id'
              }
    ); return producto;

}

