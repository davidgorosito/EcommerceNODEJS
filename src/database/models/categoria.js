module.exports= (sequelize,DataTypes)=>{
    const categoria = sequelize.define(
    'Categoria',{
        nombre_categoria:DataTypes.STRING,
        deleted_at: DataTypes.DATE

              },
              {
                timestamps: false
              },
    
    ); 
    categoria.associate=(models)=>{
      categoria.hasMany(models.Producto,{
        as:'productos',
        foreignkey:'categorium_id'
      });
 
    }
    return categoria;}

