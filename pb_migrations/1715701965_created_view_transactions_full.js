/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0p9u713yq6dxo6m",
    "created": "2024-05-14 15:52:45.326Z",
    "updated": "2024-05-14 15:52:45.326Z",
    "name": "view_transactions_full",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z1ykhaoi",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT tr.id, tr.amount FROM tbl_transactions AS tr INNER JOIN tbl_expense_types AS et ON tr.type_id = et.id;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0p9u713yq6dxo6m");

  return dao.deleteCollection(collection);
})
