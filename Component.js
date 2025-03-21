export default class Component {
    constructor(id, image_url, name, description, cost, count) {
        this.id = id;
        this.image_url = image_url;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.count = count;
    }

    // Метод для создания объекта Component из JSON данных
    static fromJson(json) {
        return new Component(
            json.id,
            json.image_url,
            json.name,
            json.description,
            json.cost,
            json.count
        );
    }

    // Метод для преобразования объекта Component в JSON
    toJson() {
        return {
            id: this.id,
            image_url: this.image_url,
            name: this.name,
            description: this.description,
            cost: this.cost,
            count: this.count
        };
    }
}