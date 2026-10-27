document.getElementById("canteen-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Number converts text to a number; non-numeric text such as "ten" becomes NaN.
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);
    document.getElementById("total").textContent = String(price * quantity);
});
