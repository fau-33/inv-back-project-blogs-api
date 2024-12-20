module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPost',
    });
  };

  return User;
};