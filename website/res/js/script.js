function getData() {
	$.ajax({
		url: "http://localhost:8000/graphql",
		contentType: "application/JSON",
		method: "POST",
		data: JSON.stringify({
			query: `{
				projects {
				  edges {
					node {
					  title
					  projectMeta {
						projectFinished
						githubLink
					  }
					}
				  }
				}
			}`,
		}),
	})
		.done(function (result) {
			console.log("done");
			console.log(result);
		})
		.fail(function () {
			console.log("fail");
		})
		.always(function () {
			console.log("always");
		});
}

$(document).ready(function () {
	$("#menu").click(function () {
		$(this).toggleClass("fa-times");
		$(".navbar").toggleClass("nav-toggle");
	});

	$(window).on("scroll load", function () {
		$("#menu").removeClass("fa-times");
		$(".navbar").removeClass("nav-toggle");
	});

	// Data access test from GraphQL endpoint
	getData();
});
