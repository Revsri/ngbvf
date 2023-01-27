function Login()
{
    player_name = document.getElementById("player_name").value;
    localStorage.set_Item("player_name", player_name);

    window.location = "game_page.html";
}