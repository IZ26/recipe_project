<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
$app->get('/recipe', '\App\Controllers\RecipeController:getAllRecipe');
$app->post('/recipe', '\App\Controllers\RecipeController:createRecipe');
$app->delete('/recipe/{id}', '\App\Controllers\RecipeController:deleteRecipe');
$app->put('/recipe/{id}', '\App\Controllers\RecipeController:updateRecipe');