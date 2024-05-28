# Setup Go & Docker
## Init

* Reopen in Development Container
* run `go mod init <package`
* run `go mod tidy`
* try f.e. `go run ./ serve` or launch via _Launch Server_ run config, first launch might take some time

## Customize
* copy the docker-compose override example and customize it: `cp docker-compose.override.example.yml docker-compose.override.yml`
* add mod and sum: `git add go.mod go.sum`

# Database Model
Src: [Medium](https://medium.com/towards-data-engineering/building-a-personal-finance-management-app-database-setup-with-postgresql-and-docker-5075e283303e)
## Tables

### expense_categories


* id SERIAL PRIMARY KEY,
* category_name VARCHAR(255) NOT NULL


### expense_types


* id SERIAL PRIMARY KEY,
* type_name VARCHAR(255) NOT NULL,
* category_id INT NOT NULL,
* FOREIGN KEY (category_id) REFERENCES expense_categories(id)


### Transactions


* id SERIAL PRIMARY KEY,
* date DATE NOT NULL,
* amount DECIMAL(10, 2) NOT NULL,
* note VARCHAR
* type_id INT NOT NULL,
* category_id INT NOT NULL,
* FOREIGN KEY (type_id) REFERENCES expense_types(id),
* FOREIGN KEY (category_id) REFERENCES expense_categories(id)


## Data for the tables


expense_categories (category_name) VALUES 
* ('Income'),
* ('Personal Fixed Costs'),
* ('Personal Running Costs'),
* ('Housing Fixed Costs'),
* ('Travel Costs');

expense_types (type_name, category_id) VALUES 
* ('Salary', 1),
* ('Bonus',1),
* ('Other Income',1),
* ('Groceries', 2),
* ('Gym', 2),
* ('Akasse', 2),
* ('Mobile Phone', 2),
* ('Subscription', 2),
* ('Other Housing', 2),
* ('Shopping Clothes', 3),
* ('Shopping Other', 3),
* ('Classes & Coaching', 3),
* ('Books', 3),
* ('Restaurants', 3),
* ('Fast Food', 3),
* ('Drinks', 3),
* ('Other Non Housing', 3),
* ('Rent', 4),
* ('Tickets', 5),
* ('Accommodation', 5),
* ('Travel Expenses', 5),
* ('Transportation',3);
