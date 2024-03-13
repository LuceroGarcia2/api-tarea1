import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;

};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem =  await ItemModel.findOne({ _id: id});
  return responseItem;
};

const updataCar = async (id: string, data: Car) =>{
  const responseItem =  await ItemModel.findOneAndUpdata({ _id: id});
  return responseItem;
  
}
const delateCar = async () =>{
  const responseItem =  await ItemModel.remove({ _id: id});
  return responseItem;

}

export {insertCar, getCars, getCar updateCar, deleteCar};

  3