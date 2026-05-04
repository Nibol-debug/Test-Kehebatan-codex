<?php
namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $auth = $request->getHeaderLine('Authorization');
        if (!$auth || !str_starts_with($auth, 'Bearer ')) {
            return service('response')->setStatusCode(401)->setJSON(['message' => 'Unauthorized']);
        }
    }
    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}
