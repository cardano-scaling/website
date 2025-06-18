{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-parts.url = "github:hercules-ci/flake-parts";
    hydra-coding-standards.url = "github:cardano-scaling/hydra-coding-standards/0.6.6";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [
        inputs.hydra-coding-standards.flakeModule
      ];
      perSystem = { config, pkgs, ... }: {
        # Auto formatters. This also adds a flake check to ensure that the
        # source tree was auto formatted.

        coding.standards.hydra.enable = true;

        devShells.default = pkgs.mkShell {
          name = "Cardano Scaling";
          inputsFrom = [
            config.treefmt.build.devShell
          ];
          nativeBuildInputs = [
            pkgs.nodejs
            pkgs.yarn
          ];
        };
      };
    };
}
