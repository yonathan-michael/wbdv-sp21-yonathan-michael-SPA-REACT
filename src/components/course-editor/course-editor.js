import React from "react";
import { Link } from "react-router-dom";

const CourseEditor = ({ history }) => (
	<div class="container">
		<h1>
			<Link to="/courses/table">
				<i className="fas fa-arrow-left"></i>
			</Link>
			Course Editor
			<i
				className="fas fa-times float-right"
				onClick={() => history.goBack()}
			></i>
		</h1>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Course Name
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<i class="fa fa-bars text-black pl-0 pt-2 pr-3">
							{" "}
							<span class="sr-only">(current)</span>{" "}
						</i>
					</li>
				</ul>

				<form class="form-inline my-2 my-lg-0">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Add Module"
						aria-label="Search"
					></input>
					<button
						class="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						+
					</button>
					<a href="../index.html" class="text-dark pl-5 pr-1">
						<b>Home</b>
					</a>
				</form>
			</div>
		</nav>

		<div class="row">
			<div class="col-4 p-3">
				<ul class="list-group">
					<li class="list-group-item active">
						Module 1<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 2<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 3<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 4<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 5<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 6<i class="pull-right fa fa-trash"></i>
					</li>
					<li class="list-group-item">
						Module 7<i class="pull-right fa fa-trash"></i>
					</li>
					<i class="fa fa-plus p-3 text-right text-white"></i>
				</ul>
			</div>
			<div class="col-8">
				<br />

				<ul class="nav nav-pills">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">
							Topic 1
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Topic 2
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Topic 3
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Topic 4
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							+
						</a>
					</li>
				</ul>

				<br />

				<div class="container">
					<div class="p-1">
						<label for="LessonTitle">Lesson Title</label>
						<input class="form-control" id="LessonTitle" />
					</div>

					<div class="p-1">
						<label for="Body">Body</label>
						<input class="form-control" id="Body" />
					</div>

					<div class="pt-3">
						<a class="btn btn-success border-dark">Post</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default CourseEditor;
