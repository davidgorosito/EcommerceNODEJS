module.exports= (sequelize,DataTypes)=>{
    const genero = sequelize.define(
    'Genero',{
        nombreGenero:DataTypes.STRING,
        deleted_at: DataTypes.DATE

              },
              {
                timestamps: false
              },
    ); 
   genero.associate=(models)=>{
     genero.hasMany(models.Producto,{ 
        as:'productos',
     foreignkey:'genero_id'
   });}
 

    
    
    return genero;

}

