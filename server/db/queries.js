import { pool } from "./index.js";

export const find = async () => {
  const QUERY = "SELECT * FROM PRODUCTS";
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY);
    console.log(result);
    return result[0];
  } catch (err) {
    console.log("error ocured while finding all records", err);
    throw err;
  }
};

export const findById = async (id) => {
  const QUERY = "SELECT * FROM PRODUCTS WHERE id = ?";
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [id]);
    console.log(result);
    return result[0];
  } catch (err) {
    console.log("error ocured while finding all records", err);
    throw err;
  }
};

export const create = async (title, description, price) => {
  const QUERY =
    "INSERT INTO PRODUCTS (title, description, price) VALUES(?,?,?)";
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [title, description, price]);
    console.log(result);
    return result;
  } catch (err) {
    console.log("error ocured while finding all records", err);
    throw err;
  }
};

export const update = async (title, description, price, id) => {
  const QUERY =
    "UPDATE PRODUCTS SET title = ?, description = ?, price = ? WHERE id = ?";
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [title, description, price, id]);
    return result;
  } catch (err) {
    console.log("error ocured while finding all records", err);
    throw err;
  }
};

export const deleteRecord = async (id) => {
  const QUERY = "DELETE FROM PRODUCTS WHERE id = ?";
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [id]);
    return result;
  } catch (err) {
    console.log("error ocured while finding all records", err);
    throw err;
  }
};
