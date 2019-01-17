<?php

namespace App\Controllers;
use http\Exception\InvalidArgumentException;
use PDO;
use App\Models\Recipe;
use Slim\Http\Request;
use Slim\Http\Response;

class RecipeController
{

    protected $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function getRecipe($id)
    {
        $recipe = $this->container->get('db')->prepare(
            "SELECT * FROM recipe WHERE id = :id"
        );
        $recipe->execute([ 'id' => $id]);
        return $recipe->fetchObject();
    }

    public function getAllRecipe($request, $response, $args)
    {
        $recipe = $this->container->get('db')->query(
            "SELECT * FROM recipe"
        );
        $recipe = $recipe->fetchAll(PDO::FETCH_OBJ);
        return $response->withStatus(200)->withJson($recipe);
    }

    public function createRecipe($request, $response, $args)
    {
        $body = $request->getParsedBody();

        if (!isset($body['name'], $body['ingredients'], $body['steps'])) {
            return $response->withStatus(404);
        }

        $recipe = $this->container->get('db')->prepare(
            "INSERT INTO recipe(name, ingredients, steps) VALUES (:name, :ingredients, :steps)"
        );
        $recipe->execute([
            'name' => $body['name'],
            'ingredients' => $body['ingredients'],
            'steps' => $body['steps']
        ]);

        $recipe = $this->getRecipe($this->container->get('db')->lastInsertId());
        return $response->withStatus(200)->withJson($recipe);
    }

    public function deleteRecipe($request, $response, $args)
    {
        $query = $this->container->db->prepare('DELETE FROM recipe WHERE id = :id');
        $query->execute(['id' => $args['id']]);

        if (!$query->rowCount()) {
            return $response->withStatus(404);
        }

        return $response->withStatus(200);
    }

    public function updateRecipe($request, $response, $args)
    {
        $body = $request->getParsedBody();

        if (!isset($body['name'], $body['ingredients'], $body['steps'])) {
            return $response->withStatus(404);
        }

        $recipe = $this->container->get('db')->prepare(
            "UPDATE recipe SET name = :name, ingredients = :ingredients, steps = :steps WHERE id = :id"
        );
        $recipe->execute([
            'name' => $body['name'],
            'ingredients' => $body['ingredients'],
            'steps' => $body['steps'],
            'id' => $args['id']
        ]);

        $recipe = $this->getRecipe($args['id']);
        return $response->withStatus(200)->withJson($recipe);
    }
}