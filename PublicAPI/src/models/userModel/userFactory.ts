import Sequelize from "sequelize";
import { SequelizeAttributes } from "../defaultInterfaceAttributes/sequelize.attributes";
import { UserAttributes } from "./attributes";
import { UserInterface } from "../defaultInterfaceAttributes/model.interfaces";

export const UserFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<UserInterface> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    name: {
      type: Sequelize.STRING(15),
      allowNull: false,
    }, 
    identity: {
      type: Sequelize.STRING(40),
      allowNull: false,
    }, 
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
    }, 
    gcn: {
      type: Sequelize.STRING(5),
      allowNull: false,
    }
  }
  const User = sequelize.define<UserInterface, UserAttributes>("users", attributes);
  return User;
}