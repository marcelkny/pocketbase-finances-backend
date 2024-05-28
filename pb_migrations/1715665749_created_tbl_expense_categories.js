/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b9nx4qyra9zhomp",
    "created": "2024-05-14 05:49:09.063Z",
    "updated": "2024-05-14 05:49:09.063Z",
    "name": "tbl_expense_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jpid5ugf",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b9nx4qyra9zhomp");

  return dao.deleteCollection(collection);
})
