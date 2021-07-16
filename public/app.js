let searchContent = document.querySelector("#search-content")

fetch("https://api.adzuna.com/v1/api/jobs/us/search/10?app_id=640789aa&app_key=8a0cea7bc7375fa1f99901c3aff8150f&results_per_page=100&what_and=software_and_engineering")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.results[0]['category']['label'])

    let searchItems = []
    for (let i=0; i<25; i++) {
        let companyName = data.results[i]['company']['display_name']+'<br>'
        let postDate = data.results[i]['created']+'<br>'
        let location = data.results[i]['location']['area'][i] + '<br>'
        let title = data.results[i]['title']

        searchItems.push(companyName, postDate, title)


        searchContent.innerHTML = `<span>${searchItems}</span>`


    }


})