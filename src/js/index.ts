import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";


interface IBook {
    id: number;
    title: string;
    author: string;
    publisher: string;
    price: number;
}

let baseUri : string = "http://anbo-bookstorerest.azurewebsites.net/api/Books";
/**
let outputElement1 : HTMLDivElement = <HTMLDivElement> document.getElementById("outputArea1");
let outputElement2 : HTMLDivElement = <HTMLDivElement> document.getElementById("outputArea2");
let outputElement3 : HTMLDivElement = <HTMLDivElement> document.getElementById("outputArea3");
let outputElement4 : HTMLDivElement = <HTMLDivElement> document.getElementById("outputArea4");
let inputElement1 : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea2");
let button1 : HTMLInputElement = <HTMLInputElement> document.getElementById("buttonArea2");
let button2 : HTMLInputElement = <HTMLInputElement> document.getElementById("buttonArea3");
let button3 : HTMLInputElement = <HTMLInputElement> document.getElementById("buttonArea4");
button1.addEventListener("click", showOneBook);

button2.addEventListener("click", addBook);

button3.addEventListener("click", deleteBook);

/**showAllBooks();**/

new Vue({
    el: "#app",
    data: {
        books: [],
        oneBook: "",
        bookId1: 0,
        bookId2: -1,
        bookToAdd: {
            title: null,
            author: null,
            publisher: null,
            price: null
        },

        messageGetAll: "",
        messageGetOne: "",
        messageAddBook: "",
        messageDelete: ""
    },
    
    methods: {
        getAll(){
            axios.get<IBook[]>(baseUri)
            .then((Response: AxiosResponse<IBook[]>) => {
                console.log(Response.data)
                this.books = Response.data
                this.messageGetAll = "Loaded books Successfully"
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                this.messageGetAll = error.message
            })
        },
        getOne(bookId: number){
            let uri = baseUri + "/" + bookId
            axios.get<IBook>(uri)
            .then((Response: AxiosResponse<IBook>) => {
                console.log(Response.data)
                this.oneBook = Response.data
                this.messageGetOne = "Loaded book Successfully"
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                this.messageGetOne = error.message
            })
        },
        AddBook(){
            axios.post<IBook>(baseUri, this.bookToAdd)
            .then((Response: AxiosResponse<IBook>) => {
                console.log(Response.data)
                this.messageAddBook = "Added Book Successfully"
                this.getAll()
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                this.messageAddBook = error.message
            })
        },
        DeleteBook(id: number){
            let uri = baseUri + "/" + id
            axios.delete<void>(uri)
            .then((Response: AxiosResponse) => {
                console.log(Response.data)
                this.messageDelete = "Deleted Book Successfully"
                this.getAll()
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                this.messageDelete = error.message
            })
        }
    },
    created() {
        this.getAll()
    }


})

/* function getAll(): void{
    axios.get<IBook[]>(baseUri)
            .then((Response: AxiosResponse<IBook[]>) => {
                console.log(Response.data)
                this.books = Response.data
                this.messageGetAll = "Loaded books"
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                this.messageGetAll = error.message
            })
} */






/**
function showAllBooks(): void{
    axios.get<IBook[]>(baseUri)
        .then(function (response: AxiosResponse<IBook[]>): void{
            let result : string = "<ul id= 'bookList'>";
            response.data.forEach((b : IBook) => {
                result += "<li>" + b.id + " - " + b.title + " - " + b.author + " - " + b.publisher + " - " + b.price + "</li>";
            });
            result += "</ul>";
            outputElement1.innerHTML = result;
        })
        .catch(function (error: AxiosError) : void {
            if (error.response) {
                outputElement1.innerHTML = error.message;
            } else {
                outputElement1.innerHTML = error.message;
            }
        })
}

function showOneBook(): void{
    let id : String = inputElement1.value;
    axios.get<IBook>(baseUri + "/" + id)
    .then(function (response: AxiosResponse<IBook>): void{
        let result : string = "<li>" + response.data.id + " - " + response.data.title + " - " + response.data.author + " - " + response.data.author + " - " + response.data.price + "</li>";
        outputElement2.innerHTML = result;
    })
    .catch(function (error: AxiosError) : void {
        if (error.response) {
            outputElement2.innerHTML = error.message;
        } else {
            outputElement2.innerHTML = error.message;
        }
    })
}

function addBook(): void{
    let addTitleElement : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea3Title");
    let addAuthorElement : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea3Author");
    let addPublisherElement : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea3Publisher");
    let addPriceElement : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea3Price");

    let addTitle : string = addTitleElement.value;
    let addAutor : string = addAuthorElement.value;
    let addPublisher : string = addPublisherElement.value;
    let addPrice : number = Number(addPriceElement.value);

    axios.post<IBook>(baseUri, {title: addTitle, author: addAutor, publisher: addPublisher, price: addPrice})
        .then((response : AxiosResponse) => {
            let message : string = "response " + response.status + " " + response.statusText;
            outputElement3.innerHTML = message;
            showAllBooks();
        })
        .catch((error: AxiosError) => {
            outputElement3.innerHTML = error.message;
        });
}

function deleteBook(): void{
    let deleteIdElement : HTMLInputElement = <HTMLInputElement> document.getElementById("inputArea4");
    let deleteId : number = Number(deleteIdElement.value);

    axios.delete<IBook>(baseUri + "/" + deleteId)
        .then(function (response: AxiosResponse<IBook>): void {
            outputElement4.innerHTML = response.status + " " + response.statusText;
            showAllBooks();
        })
        .catch(function (error: AxiosError): void {
            if (error.response) {
                outputElement4.innerHTML = error.message;
            } else { 
                outputElement4.innerHTML = error.message;
            }
        });
}**/