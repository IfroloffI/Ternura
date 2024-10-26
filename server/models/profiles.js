module.exports = (Sequelize, DataTypes) => {
    const profiles = Sequelize.define("profiles", {
        // TODO: Сущность Лёни
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    return profiles;
  };