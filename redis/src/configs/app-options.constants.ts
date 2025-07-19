import { CacheModuleAsyncOptions } from "@nestjs/cache-manager";
import { ConfigModule } from "@nestjs/config";

export const RedisOptions: CacheModuleAsyncOptions = {
    isGlobal: true,
    imports: [ConfigModule]
}