#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Emart.AccountService/Emart.AccountService.csproj", "Emart.AccountService/"]
RUN dotnet restore "Emart.AccountService/Emart.AccountService.csproj"
COPY . .
WORKDIR "/src/Emart.AccountService"
RUN dotnet build "Emart.AccountService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Emart.AccountService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Emart.AccountService.dll"]