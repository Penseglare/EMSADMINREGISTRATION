export default class sealedDecorators
{
    public static sealed(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
} 