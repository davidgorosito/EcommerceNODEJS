module.exports= (sequelize,DataTypes)=>{
    const producto = sequelize.define(
    'Producto',{
        nombre:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        precio:DataTypes.INTEGER,
        imagen_producto:DataTypes.STRING,
        genero_id:DataTypes.INTEGER,
        categorium_id:DataTypes.INTEGER,
        deleted_at: DataTypes.DATE
      },
        {
          timestamps: false
        },
);
 producto.asociate=(models)=>{
   producto.belongsTo(models.Categoria,{
     as:'categoria',
     foreignkey:'categorium_id'
   })
 }
 producto.asociate=(models)=>{
  producto.belongsTo(models.Genero,{
    as:'generos',
    foreignkey:'genero_id'
  });}

///producto.belongsTo(models.Genero, {
   //as: 'Genero',
    //foreignKey: 'id_Genero',
    //});
  //}
  return producto;}

